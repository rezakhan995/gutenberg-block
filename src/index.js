const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const el = wp.element.createElement;

//register a block
registerBlockType("gutentest-block/text", //slug of block
    {
        title: "Custom Text Block",
        description: "This is a custom block",
        category: 'common',
        icon: "format-image",
        attributes: {
            title: {
                type: "string",
                source: "html",
                selector: "h2"
            },
            body: {
                type: "string",
                source: "html",
                selector: "p"
            }
        },
        edit: function ({ attributes, setAttributes }) {
            const { title, body } = attributes;

            function onChangeTitle(title) {
                setAttributes( { title: title } );
            }
            function onChangeBody(details) {
                setAttributes( { body: details } );
            }

            return ([
                <div>
                    <RichText key="editable"
                                tagName="h2"
                                placeholder="Title Here"
                                value={ title }
                                onChange={ onChangeTitle } 
                                />
                    <RichText key="editable"
                                tagName="p"
                                placeholder="Details Here"
                                value={ body }
                                onChange={ onChangeBody } 
                                />
                </div>
            ]);
        },
        save: function ({ attributes }) {
            const { title, body } = attributes;
            return (
                <div>
                    <h2>{ title }</h2>
                    <RichText.Content tagName="p"
                            value={ body } />
                </div>
            );
        }
    }
);