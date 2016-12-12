/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/


export default
    angular.module('TeamsListDefinition', [])
    .factory('TeamList', ['i18n', function(i18n) {
    return {

        name: 'teams',
        iterator: 'team',
        selectTitle: i18n._('Add Team'),
        editTitle: i18n._('Teams'),
        listTitle: i18n._('Teams'),
        selectInstructions: i18n.sprintf(i18n._("Click on a row to select it, and click Finished when done. Click the %s button to create a new team."), "<i class=\"icon-plus\"></i> "),
        index: false,
        hover: true,

        fields: {
            name: {
                key: true,
                label: i18n._('Name'),
                columnClass: 'col-lg-3 col-md-4 col-sm-9 col-xs-9',
                modalColumnClass: 'col-md-8'
            },
            description: {
                label: i18n._('Description'),
                columnClass: 'col-lg-3 col-md-3 hidden-sm hidden-xs',
                excludeModal: true
            },
            organization: {
                label: i18n._('Organization'),
                ngBind: 'team.organization_name',
                sourceModel: 'organization',
                sourceField: 'name',
                columnClass: 'col-md-3 hidden-sm hidden-xs',
                excludeModal: true
            }
        },

        actions: {
            add: {
                mode: 'all', // One of: edit, select, all
                ngClick: 'addTeam()',
                awToolTip: i18n._('Create a new team'),
                actionClass: 'btn List-buttonSubmit',
                buttonContent: '&#43; ' + i18n._('ADD'),
                ngShow: 'canAdd'
            }
        },

        fieldActions: {

            columnClass: 'col-lg-3 col-md-2 col-sm-3 col-xs-3',

            edit: {
                label: i18n._('Edit'),
                ngClick: "editTeam(team.id)",
                icon: 'icon-edit',
                "class": 'btn-xs btn-default',
                awToolTip: i18n._('Edit team'),
                dataPlacement: 'top',
                ngShow: 'team.summary_fields.user_capabilities.edit'
            },
            view: {
                label: i18n._('View'),
                ngClick: "editTeam(team.id)",
                "class": 'btn-xs btn-default',
                awToolTip: i18n._('View team'),
                dataPlacement: 'top',
                ngShow: '!team.summary_fields.user_capabilities.edit'
            },
            "delete": {
                label: i18n._('Delete'),
                ngClick: "deleteTeam(team.id, team.name)",
                icon: 'icon-trash',
                "class": 'btn-xs btn-danger',
                awToolTip: i18n._('Delete team'),
                dataPlacement: 'top',
                ngShow: 'team.summary_fields.user_capabilities.delete'
            }
        }
    };}]);
