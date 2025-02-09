# Next.js 15 Server Components: Nested Data Fetching Race Condition

This repository demonstrates a potential bug in Next.js 15 when using server components with deeply nested data fetching.  Deeply nested data fetches can lead to race conditions, resulting in rendering errors or infinite loops. 

## Problem Description

When a server component fetches data, and a child component also fetches data based on the parent's data, the child's fetch might not complete before the parent attempts to render. This race condition can lead to unexpected behavior.

## Solution

The solution involves using `use` to ensure that the nested data fetch completes before rendering the child component.  Alternatively, better data management practices, like leveraging a state management solution, can prevent such issues.