---
title: 'Kodi retrieve missing (unparseable) files'
description: "SQL query to retrieve files that Kodi couldn't parse."
date: '2015-01-07'
tags: ['kodi', 'sql']
published: true
---

This simple SQL query might save you some time if you need to get a list of files that Kodi 14.0 (former XBMC) cannot parse during a library update. The resulting list can then be used to fix/add the metadata for these files as described on [http://kodi.wiki/view/Incorrect_and_missing_videos](http://kodi.wiki/view/Incorrect_and_missing_videos).

```sql
SELECT *
FROM `files` f
         INNER JOIN `path` p ON f.idPath = p.idPath
WHERE f.dateAdded IS NULL
  AND p.strPath LIKE "nfs://%"  # value to be replaced by the protocol/path used
  AND LENGTH(f.strFileName) > 0
```

More information about Kodi’s database structure can be found on [http://kodi.wiki/view/Databases](http://kodi.wiki/view/Databases).
