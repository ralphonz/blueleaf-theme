<?php 

namespace Roots\Sage\AttributeIcons;

/**
 * Add to the new term form
 * @param string $taxonomy
 */
add_action( 'attribute_add_form_fields', __NAMESPACE__ . '\\add_icon_group_field', 10, 2 );

function add_icon_group_field($taxonomy) {
    ?><div class="form-field term-group">
        <label for="icon"><?php _e('Icon', 'blueleaf'); ?></label>
        <input class="icon-picker-input" name="icon" id="icon" type="text" value="" size="40">
    </div><?php
}

/**
 * Save the input on the add new term form
 *
 */
add_action( 'created_attribute', __NAMESPACE__ . '\\save_attribute_meta', 10, 2 );

function save_attribute_meta( $term_id, $tt_id ){
    if( isset( $_POST['icon'] ) && '' !== $_POST['icon'] ){
        $icon = sanitize_text_field( $_POST['icon'] );
        add_term_meta( $term_id, 'icon', $icon );
    }
}

/**
 * Add to the edit term form
 * @param int $term
 * @param string $taxonomy
 */
add_action( 'attribute_edit_form_fields', __NAMESPACE__ . '\\edit_icon_field', 10, 2 );

function edit_icon_field( $term, $taxonomy ){
          
    // get current group
    $icon = get_term_meta( $term->term_id, 'icon', true );
                
    ?><tr class="form-field term-group-wrap">
        <th scope="row"><label for="icon"><?php _e( 'Icon', 'blueleaf' ); ?></label></th>
        <td><input class="icon-picker-input" name="icon" id="icon" type="text" value="<?php echo $icon ?>" size="40"></td>
    </tr><?php
}

/**
 * Update the term meta
 *
 */
add_action( 'edited_attribute', __NAMESPACE__ . '\\update_attribute_meta', 10, 2 );

function update_attribute_meta( $term_id, $tt_id ){

    if( isset( $_POST['icon'] ) && '' !== $_POST['icon'] ){
        $icon = sanitize_text_field( $_POST['icon'] );
        update_term_meta( $term_id, 'icon', $icon );
    }
}

/**
 * Add a column to display the icon
 */
add_filter('manage_edit-attribute_columns', __NAMESPACE__ . '\\add_icon_column' );

function add_icon_column( $columns ){
    $columns['icon'] = __( 'Icon', 'blueleaf' );
    return $columns;
}

/**
 * Add the icons to the column
 */
add_filter('manage_attribute_custom_column', __NAMESPACE__ . '\\add_icon_column_content', 10, 3 );

function add_icon_column_content( $content, $column_name, $term_id ){

    if( $column_name !== 'icon' ){
        return $content;
    }

    $term_id = absint( $term_id );
    $icon = get_term_meta( $term_id, 'icon', true );

    if( !empty( $icon ) ){
        $content .= '<i class="fa ' . esc_attr( $icon ) . '"></i>';
    }

    return $content;
}