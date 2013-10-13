/*
 * File: app/store/optionDates.js
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

Ext.define('CalendarPicker.store.optionDates', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        storeId: 'optionDates',
        proxy: {
            type: 'ajax',
            url: './data/optionDates.json',
            reader: {
                type: 'json',
                rootProperty: 'datalist'
            }
        },
        fields: [
            {
                name: 'ID'
            },
            {
                name: 'customType'
            },
            {
                name: 'dateStr'
            },
            {
                name: 'descr'
            }
        ]
    }
});