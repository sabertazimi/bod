/* eslint-disable no-console -- Type-Aware Test */
// Test file for Type-Aware Rules
// This file should trigger ts/no-unsafe-member-access errors

declare const anyVar: any
declare const nestedAny: { prop: any }

// These should all trigger ts/no-unsafe-member-access errors
// eslint-disable-next-line ts/no-unsafe-member-access -- Type-Aware Test
console.log(anyVar.a)
// eslint-disable-next-line ts/no-unsafe-member-access -- Type-Aware Test
console.log(anyVar.a.b)
// eslint-disable-next-line ts/no-unsafe-member-access -- Type-Aware Test
console.log(anyVar.a)
// eslint-disable-next-line ts/no-unsafe-member-access -- Type-Aware Test
console.log(anyVar.a.b)

// Nested any should also trigger errors
// eslint-disable-next-line ts/no-unsafe-member-access -- Type-Aware Test
console.log(nestedAny.prop.x)
// eslint-disable-next-line ts/no-unsafe-member-access -- Type-Aware Test
console.log(nestedAny.prop.y)
