# unofficial-uk-parliament-lib

Unofficial typed client for UK Parliament APIs, starting with the Members API.

- Members API docs: https://members-api.parliament.uk/index.html
- OpenAPI spec: https://members-api.parliament.uk/swagger/v1/swagger.json

Installation

```bash
npm install unofficial-uk-parliament-lib
```

Usage (Members API)

```ts
import { createMembersClient } from "unofficial-uk-parliament-lib";

const members = createMembersClient();

// Example: search constituencies
// API surface will be generated from the OpenAPI spec in src/generated/members
```

This package generates types and a minimal wrapper around the Members API based on its OpenAPI spec.

Caveats

- This is unofficial and not affiliated with UK Parliament.
- API availability and schemas may change without notice.

License

MIT
