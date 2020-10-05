<?php

/**
 * custom gutenberg functions
 */

function gutentest_override_gutenberg_colors() {
    add_theme_support( "editor-color-palette", [
        [
            "name"  => "white",
            "slug"  => "white",
            "color" => "#ffffff",
        ],
        [
            "name"  => "black",
            "slug"  => "black",
            "color" => "#000000",
        ],
        [
            "name"  => "green",
            "slug"  => "green",
            "color" => "#228B22",
        ],
        [
            "name"  => "red",
            "slug"  => "red",
            "color" => "#ff0000",
        ],
    ] );

    add_theme_support( "editor-font-sizes", [
        [
            "name" => "Small",
            "slug" => "small",
            "size" => 8,
        ],
        [
            "name" => "Normal",
            "slug" => "normal",
            "size" => 12,
        ],
        [
            "name" => "Large",
            "slug" => "large",
            "size" => 16,
        ],
    ] );
}

function gutentest_register_block() {
    wp_register_script(
        "gutentest-block-handler",
        GTN_BUILD . "index.js",
        ["wp-blocks", "wp-element"]
    );
    
    register_block_type(
        "gutentest-block/text",
        [
            "editor_script" => "gutentest-block-handler",
        ]
    );
}
add_action( "init", "gutentest_register_block" );
add_action( "init", "gutentest_override_gutenberg_colors" );