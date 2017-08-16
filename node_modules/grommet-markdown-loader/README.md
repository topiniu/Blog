grommet-markdown-loader
===============

Load markdown files inside your Grommet environment.

This work has been done based on the awesome [markdown-loader](https://github.com/peerigon/markdown-loader)

## Usage

```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!grommet-markdown" },
        ]
    }
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
