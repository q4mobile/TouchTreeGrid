/*
 * File: app/controller/DateExamplesController.js
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

Ext.define('CalendarPicker.controller.DateExamplesController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            overlayPanel: {
                autoCreate: true,
                selector: 'overlayPanel',
                xtype: 'overlayPanel'
            },
            dateexamples: {
                selector: 'dateexamples',
                xtype: 'dateexamples'
            }
        },

        control: {
            "textfield#sel_date": {
                sel_date: 'onSelDate'
            },
            "container#calendar_sel_date": {
                calendarClosed: 'onSelDateClosed'
            }
        }
    },

    onSelDate: function(textfield) {
        var returnItem = this.getDateexamples().down('#sel_date');
        var lastSelDt = returnItem.lastSelectedDate;

        var selDts=(Ext.isEmpty(lastSelDt) ? [] : [lastSelDt]);


        var getDts = Ext.create('widget.calendarpicker', {
            title : 'Select Date',
            itemId : 'calendar_sel_date',
            selectMode: 'SINGLE',
            backMonths: 3,
            forwardMonths: 3,
            autoCollapseMonthsPriorToMinSelDt: true, // needed for auto-scroll to prior-selected month
            returnItem: returnItem,
            selDtArr: selDts
        });

        var overPnl = this.getOverlayPanel();
        overPnl.add(getDts);
        overPnl.showBy(textfield);

    },

    onSelDateClosed: function(calendarpicker) {
        var returnItem=calendarpicker.getReturnItem();
        var lastSelDt = calendarpicker.getLastSelectedDate();

        var day = Ext.Date.parse(lastSelDt, 'Y-m-d');
        returnItem.setValue(Ext.Date.format(day, 'm/d/Y'));
        returnItem.lastSelectedDate = lastSelDt;

        var overPnl = this.getOverlayPanel();
        overPnl.removeAll(true, true);  // remove all items from DOM 
        overPnl.hide();
    }

});