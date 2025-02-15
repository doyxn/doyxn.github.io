This markdown sample includes various languages and markdown features to test your syntax highlighting and formatting.

## Basic Markdown Features

### Lists

1. First item
2. Second item
   - Nested item 1
   - Nested item 2
3. Third item

### Emphasis

*Italic text* and **bold text** are important for emphasis.

### Links and Images

[Visit OpenAI](https://www.openai.com)

![Sample Image](https://via.placeholder.com/150)

## Code Samples

### Python

Here's a simple Python function:

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Print the first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i))
```

### JavaScript

A JavaScript example with async/await:

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Usage
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Java

A simple Java class:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I'm " + age + " years old.");
    }

    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        person.introduce();
    }
}
```

### C++

A C++ example demonstrating templates:

```cpp
#include <iostream>
#include <vector>

template<typename T>
T sum(const std::vector<T>& values) {
    T result = 0;
    for (const T& value : values) {
        result += value;
    }
    return result;
}

int main() {
    std::vector<int> integers = {1, 2, 3, 4, 5};
    std::vector<double> doubles = {1.1, 2.2, 3.3, 4.4, 5.5};

    std::cout << "Sum of integers: " << sum(integers) << std::endl;
    std::cout << "Sum of doubles: " << sum(doubles) << std::endl;

    return 0;
}
```

### C#

A C# example showing LINQ:

```csharp
using System;
using System.Linq;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        var evenNumbers = numbers.Where(n => n % 2 == 0);
        var squaredNumbers = evenNumbers.Select(n => n * n);

        Console.WriteLine("Even numbers squared:");
        foreach (var number in squaredNumbers)
        {
            Console.WriteLine(number);
        }
    }
}
```

## Tables

| Language   | Typing    | First appeared |
|------------|-----------|----------------|
| Python     | Dynamic   | 1991           |
| JavaScript | Dynamic   | 1995           |
| Java       | Static    | 1995           |
| C++        | Static    | 1979           |
| C#         | Static    | 2000           |

## Blockquotes

> The best way to predict the future is to invent it.
> 
> -- Alan Kay

## Horizontal Rule

---

This markdown sample should help you test various aspects of your syntax highlighting and markdown rendering. Make sure to check that:

1. Syntax highlighting works for all included languages
2. The copy button appears and functions correctly for each code block
3. Changing the style affects all code blocks
4. Other markdown features (lists, tables, blockquotes, etc.) render correctly