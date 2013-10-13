/*
 * File: app/view/overlayPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CalendarPicker.view.overlayPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.overlayPanel',

    config: {
        height: '95%',
        maxWidth: '17em',
        width: '100%',
        hideOnMaskTap: false,
        layout: {
            type: 'fit'
        },
        modal: true
    },

    initialize: function() {
        this.callParent();

        this.setHeight((Ext.os.is.Phone) ? '95%' : '85%');
        this.setWidth((Ext.os.is.Phone) ? '95%' : '85%');
        this.setMaxWidth((Ext.os.is.Phone) ? '' : '17em');

    }

});