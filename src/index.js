const {
    registerBlockType
} = wp.blocks;
const el = wp.element.createElement;

//register a block
registerBlockType("gutentest-block/text", //slug of block
    {
        title: "Custom Text Block",
        description: "This is a custom block",
        category: 'common',
        icon: "format-image",
        attributes: {
            author: {
                type: "string",
                source: "html",
                selector: "h2"
            }
        },
        edit: function ({ attributes, setAttributes }) {
            function updateMethod(event) {
                setAttributes( { author: event.target.value } );
            }
            return <input type = "text" value = { attributes.author } onChange = { updateMethod } />;
        },
        save: function ({ attributes }) {
            return <p>Author Name: {attributes.author}</p>;
        }
    }
);