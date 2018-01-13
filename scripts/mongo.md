# Mongo Scripts

Select db
```
use cycling-app
```

Update FTP for all existing records
```
db.ftps.updateMany({}, {$set: {test: 'TR 2x8'}})
```