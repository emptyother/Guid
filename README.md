# Guid

A GUID class for Typescript.

## Quick Start

```npm
'@emptyother:registry=https://npm.pkg.github.com' >> .npmrc
npm install @emptyother/guid
```

```typescript
import Guid from '@emptyother/guid';

var e = new Guid();
e; // Guid { value: '00000000-0000-0000-0000-000000000000' }​​​​​
e.toString(); // 00000000-0000-0000-0000-000000000000​​​​​

console.log(e); // ​​​​​Guid { value: '00000000-0000-0000-0000-000000000000' }​​​​​

JSON.stringify(e); // ​​​​​"00000000-0000-0000-0000-000000000000"​​​​​

e = Guid.newGuid(); // ​​​​​Guid { value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }​​​​​
JSON.stringify(e); // ​​​​​"bb90ef83-1a7e-42b1-90ba-39cdebb6366c"​​​​​

Guid.isValid(e.toString()); // true
Guid.empty; // ​​​​​00000000-0000-0000-0000-000000000000​​​​​
Guid.isValid(Guid.empty); // false
```
