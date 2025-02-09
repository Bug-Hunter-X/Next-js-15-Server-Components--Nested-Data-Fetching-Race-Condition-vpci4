In Next.js 15, an uncommon bug can occur when using server components with deeply nested data fetching.  If a server component fetches data that triggers another data fetch in a deeply nested child component, it can lead to unexpected behavior, including infinite loops or rendering errors. This is because the nested data fetch may not properly resolve before the parent component attempts to render, leading to race conditions. Consider the following example:

```javascript
// parent.js (Server Component)

export default async function Parent() {
  const data = await fetchData();
  return (
    <Child data={data} />
  );
}

// child.js (Server Component)

export default async function Child({ data }) {
  const nestedData = await fetchNestedData(data.id);
  return (
    <div>{JSON.stringify(nestedData)}</div>
  );
}

async function fetchData() {
  //Simulates fetching data
  await new Promise((res) => setTimeout(res, 500));
  return { id: 1 };
}

async function fetchNestedData(id) {
  //Simulates fetching nested data
  await new Promise((res) => setTimeout(res, 500));
  return { nested: 'data' };
}
```
This may cause a slow render, or an error, because `fetchNestedData` may not resolve in time.