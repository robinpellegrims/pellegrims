[![npm package link](https://img.shields.io/npm/v/@pellegrims/nx-remotecache-s3)](https://www.npmjs.com/package/@pellegrims/nx-remotecache-s3)
[![codecov](https://codecov.io/gh/robinpellegrims/pellegrims/branch/master/graph/badge.svg?token=ZMFMQFBXR7&flag=nx-remotecache-s3)](https://codecov.io/gh/robinpellegrims/pellegrims/tree/master/libs/nx-remotecache-s3)

# @pellegrims/nx-remotecache-s3

A task runner for [@nrwl/nx](https://nx.dev/react) that uses s3 storage as a remote cache. This enables all team members and CI servers to share a single cache. The concept and benefits of [computation caching](https://nx.dev/angular/guides/computation-caching) are explained in the NX documentation.

This package was built with [nx-remotecache-custom](https://www.npmjs.com/package/nx-remotecache-custom) 🙌

## Setup

```
npm install --save-dev @pellegrims/nx-remotecache-s3
```

| Parameter | Description                                                                                                             | Environment Variable / .env | `nx.json`  |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- |
| Endpoint  | Optional. The fully qualified endpoint of the webservice. This is only required when using a custom (non-AWS) endpoint. | `NX_CACHE_S3_ENDPOINT`      | `endpoint` |
| Bucket    | Optional. Specify which bucket should be used for storing the cache.                                                    | `NX_CACHE_S3_BUCKET`        | `bucket`   |
| Prefix    | Optional. Specify prefix path of target object key.                                                                     | `NX_CACHE_S3_PREFIX`        | `prefix`   |
| Region    | Optional. The AWS region to which this client will send requests.                                                       | `NX_CACHE_S3_REGION`        | `region`   |

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
        "region": "us-west-000"
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

## More Custom Runners

See [nx-remotecache-custom](https://github.com/NiklasPor/nx-remotecache-custom#all-custom-runners).
