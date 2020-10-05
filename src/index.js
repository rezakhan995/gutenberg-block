const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const el = wp.element.createElement;

//register a block
registerBlockType(
    "gutentest-block/text",
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

registerBlockType( 'gutentest-block/newsletter', {
	title: 'Custom Newsletter',
	icon: 'email',
	category: 'common',
    keywords: [ 'email', 'subscribe' ],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p'
        },
    },
	edit: function( props ) {

        function onChangeContent( newContent ) {
            props.setAttributes( { content: newContent } );
        }

        return (
            el( 
                'div', 
                { className: props.className },
                el(
                    RichText,
                    {
                        tagName: 'p',
                        format: 'string',
                        className: 'subscription-block-title',
                        onChange: onChangeContent,
                        value: props.attributes.content,
                        formattingControls: [ 'bold' ]
                    }
                ),
                el( 
                    'div', 
                    { className: 'subscription-block-form-wrap' },
                    el( 
                        'div', 
                        {},
                        'Enter your email...'
                    ),
                    el( 
                        'div', 
                        {},
                        'Subscribe'
                    )
                )
            )
        );
	},
	save: function( props ){
        return (
            el( 
                'div', 
                { className: props.className },
                el( 
                    RichText.Content, 
                    { tagName: 'p',
                      className: 'subscription-block-title',
                      value: props.attributes.content
                    } 
                ),
                el( 
                    'form', 
                    { className: 'subscription-block-form-wrap' },
                    el( 
                        'input', 
                        { 'type': 'email', 'placeholder' : 'Enter your email address' } 
                        ),
                    el( 
                        'button', 
                        {}, 
                        'Subscribe' 
                        )
                )
            )
        );
	}
});