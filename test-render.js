import md2html from './src/app/lib/render.ts';

async function test() {
  const markdown = `# Hello World

This is a **bold** text and *italic* text.

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello World');
\`\`\`

![Image](test.jpg)
`;

  try {
    const html = await md2html(markdown);
    console.log('Generated HTML:');
    console.log(html);
  } catch (error) {
    console.error('Error:', error);
  }
}

test(); 