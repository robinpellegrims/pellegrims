[![npm package link](https://img.shields.io/npm/v/@pellegrims/nx-remotecache-s3)](https://www.npmjs.com/package/@pellegrims/nx-remotecache-s3)

# @pellegrims/nx-remotecache-s3

A task runner for [@nrwl/nx](https://nx.dev/react) that uses s3 storage as a remote cache. This enables all team members and CI servers to share a single cache. The concept and benefits of [computation caching](https://nx.dev/angular/guides/computation-caching) are explained in the NX documentation.

This package was built with [nx-remotecache-custom](https://www.npmjs.com/package/nx-remotecache-custom) 🙌

## Setup

```
npm install --save-dev @pellegrims/nx-remotecache-s3
```

| Parameter        | Description                                                                                                                                           | Environment Variable / .env      | `nx.json`        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------- |
| Endpoint         | Optional. The fully qualified endpoint of the webservice. This is only required when using a custom (non-AWS) endpoint.                               | `NXCACHE_S3_ENDPOINT`            | `endpoint`       |
| Bucket           | Optional. Specify which bucket should be used for storing the cache.                                                                                  | `NXCACHE_S3_BUCKET`              | `bucket`         |
| Prefix           | Optional. Specify prefix path of target object key.                                                                                                   | `NXCACHE_S3_PREFIX`              | `prefix`         |
| Region           | Optional. The AWS region to which this client will send requests.                                                                                     | `NXCACHE_S3_REGION`              | `region`         |
| Profile          | Optional. The AWS profile to use to authenticate.                                                                                                     | `NXCACHE_S3_PROFILE`             | `profile`        |
| Force Path Style | Optional. Whether to force path style URLs for S3 objects (e.g., `https://s3.amazonaws.com/<bucket>/` instead of `https://<bucket>.s3.amazonaws.com/` | `NXCACHE_S3_FORCE_PATH_STYLE`    | `forcePathStyle` |
| Read Only        | Optional. Disable writing cache to the S3 bucket. This may be useful if you only want to write to the cache from a CI but not localhost.              | `NXCACHE_S3_READ_ONLY`           | `readOnly`       |
| Http Proxy       | Optional. Useful when your environment must connect to a proxy to access the internet.                                                                | `http_proxy` \|\| `HTTP_PROXY`   |                  |
| Https Proxy      | Optional. Useful when your environment must connect to a proxy to access the internet.                                                                | `https_proxy` \|\| `HTTPS_PROXY` |                  |
| No Proxy         | Optional. Useful when your environment must connect to a proxy to access the internet, but is not needed for connecting to aws.                       | `no_proxy` \|\| `NO_PROXY`       |                  |

```json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "@pellegrims/nx-remotecache-s3",
      "options": {
        "cacheableOperations": ["build", "test", "lint", "e2e"],
        "endpoint": "https://some-endpoint.com",
        "bucket": "name-of-bucket",
        "prefix": "prefix/",
        "region": "us-west-000",
        "profile": "name-of-aws-profile",
        "forcePathStyle": true,
        "readOnly": false
      }
    }
  }
}
```

Authentication is handled by [@aws-sdk/credential-provider-node](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_provider_node.html), so credentials will be attempted to be found from the following sources (listed in order of precedence):

- Environment variables exposed via process.env (example: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
- SSO credentials from token cache
- Web identity token credentials
- Shared credentials and config ini files
- The EC2/ECS Instance Metadata Service

## Run it 🚀

Running tasks should now show the storage or retrieval from the remote cache:

```
------------------------------------------------------------------------
Built Angular Package
 - from: /Users/name/example-workspace/libs/example-lib
 - to:   /Users/name/example-workspace/dist/libs/example-lib
------------------------------------------------------------------------
------------------------------------------------------------------------
Stored output to remote cache: s3 storage
Hash: d3d2bea71ea0f3004304c5cc88cf91be50b02bb636ebbdfcc927626fd8edf1ae
------------------------------------------------------------------------
```

## Advanced Configuration

See [nx-remotecache-custom](https://github.com/NiklasPor/nx-remotecache-custom#advanced-configuration).

### Proxy Configuration

To use a proxy to connect to the S3 bucket, set any of the `http_proxy` `https_proxy` `HTTP_PROXY` or `HTTPS_PROXY` environment variables, with the lowercase version taking precedence. If needed, the proxy can be bypassed by adding the S3 endpoint to the `no_proxy` or `NO_PROXY` environment variables.

According to AWS, the `endpoint` and `region` parameters are meant to be mutually exclusive (though that isn't the case 100% of the time). Due to the complexity of creating a specific and valid s3 endpoint, and that there is no API provided by the aws-sdk libraries to generate one, this project handles checking the `no_proxy` for the s3 `endpoint` in the following manner.

If the s3 `endpoint` has been configured, it will be checked against the `no_proxy` and if found, s3 requests will bypass the proxy.

If the s3 `endpoint` has not been configured, it is assumed that the global s3 endpoint `s3.amazonaws.com` is being used, and the `no_proxy` will be checked for that url. Because of this, you could see the following behavior:

- If the s3 client does use the global s3 `endpoint` to make requests and if that url has been added to the `no_proxy`, then those requests will correctly bypass the proxy.
- If the s3 client does not use the global s3 `endpoint` (which could happen if a region other than us-east-1 is specified), and if that non global s3 `endpoint` has not been added to the `no_proxy`, then requests that should bypass the proxy will in fact NOT bypass the proxy. In this case, it is up to the user to determine which `endpoint` is being used and to add it to the `no_proxy`.

TIP: `no_proxy` is a global env variable. To limit the blast radius of `no_proxy`, include the specific service subdomain in the `no_proxy` entry; e.g. `s3.amazonaws.com` vs `amazonaws.com`.

## More Custom Runners

See [nx-remotecache-custom](https://github.com/NiklasPor/nx-remotecache-custom#all-custom-runners).
