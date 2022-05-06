# Instructions for this Template of MongoDB

## Installation and Use

You need run the next command

```bash
  npm install mongoose
```
and for use, you need only uncomment this line on index.js

```javascript
// const mongo_on = require('./mongodb/mongo_on');
```

>Remember create the file ".env" on the folder backend with your key for use this environment variable:

```bash
MONGO_DB=your connection string
```

## Folder schemas and File template.js

In this folder you can save your schemas with a base structure on template.js

```javascript
const template = mongoose.Schema({
	template_text: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model('template_schema', template);
```

For you you can create a service

## Folder services and File template.service.js

In this folder you can save your services with a base structure on template.services.js.
You need import the template from folder schemas

```javascript
const template = require('../schemas/template');
```

And you can see 3 examples for:

    1. Get all data from your schema
    2. Get one field
    3. Create one field

For use in routes file you need import the service module and use the methods for example:

```javascript
const template = require('../mongodb/services/template.service');
template.get_all_()
```

>If you need see the official doc for mongoose:

[Documentation](https://mongoosejs.com/docs/guides.html)
