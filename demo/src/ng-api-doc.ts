/* tslint:disable */
export const ngdoc = {
  "AccordionPanelComponent": {
    "fileName": "src/accordion/accordion-group.component.ts",
    "className": "AccordionPanelComponent",
    "description": "",
    "selector": "accordion-group, accordion-panel",
    "inputs": [
      {
        "name": "heading",
        "type": "string",
        "description": "click able text in accordion's group header, check `accordion heading` below for using html in header "
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "description": "if <code>true</code> disables accordion group "
      },
      {
        "name": "isOpen",
        "type": "boolean",
        "description": "is accordion group open or closed "
      },
      {
        "name": "panelClass",
        "type": "string",
        "description": "provides an ability to use Bootstrap's contextual panel classes (`panel-primary`, `panel-success`, `panel-info`, etc...). List of all available classes [link](http://getbootstrap.com/components/#panels-alternatives) "
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "AccordionComponent": {
    "fileName": "src/accordion/accordion.component.ts",
    "className": "AccordionComponent",
    "description": "Displays collapsible content panels for presenting information in a limited amount of space. ",
    "selector": "accordion",
    "inputs": [
      {
        "name": "closeOthers",
        "type": "boolean",
        "description": "if `true` expanding one item will close all others "
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "AccordionConfig": {
    "fileName": "src/accordion/accordion.config.ts",
    "className": "AccordionConfig",
    "description": "Configuration service, provides default values for the AccordionComponent.",
    "methods": [],
    "properties": [
      {
        "name": "closeOthers",
        "defaultValue": "false",
        "type": "Boolean",
        "description": "Whether the other panels should be closed when a panel is opened "
      }
    ]
  },
  "AlertComponent": {
    "fileName": "src/alert/alert.component.ts",
    "className": "AlertComponent",
    "description": "",
    "selector": "alert,ngx-alert",
    "inputs": [
      {
        "name": "dismissible",
        "defaultValue": "false",
        "type": "boolean",
        "description": "If set, displays an inline close button "
      },
      {
        "name": "dismissOnTimeout",
        "type": "string | number",
        "description": "Number of milliseconds, if specified sets a timeout duration, after which the alert will be closed "
      },
      {
        "name": "type",
        "defaultValue": "warning",
        "type": "string",
        "description": "Alert type. Provide one of the four supported by bootstrap contextual classes: `success`, `info`, `warning`, `danger` "
      }
    ],
    "outputs": [
      {
        "name": "onClose",
        "description": "This event fires immediately when the close instance method is called, $event is an instance of Alert component. "
      },
      {
        "name": "onClosed",
        "description": "This event fires when alert closed, $event is an instance of Alert component "
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "close",
        "description": "Closes an alert by removing it from the DOM.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "AlertConfig": {
    "fileName": "src/alert/alert.config.ts",
    "className": "AlertConfig",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "dismissible",
        "defaultValue": "false",
        "type": "boolean",
        "description": "is alerts are dismissible by default "
      },
      {
        "name": "dismissOnTimeout",
        "defaultValue": "undefined",
        "type": "number",
        "description": "default time before alert will dismiss "
      },
      {
        "name": "type",
        "defaultValue": "warning",
        "type": "string",
        "description": "default alert type "
      }
    ]
  },
  "ButtonCheckboxDirective": {
    "fileName": "src/buttons/button-checkbox.directive.ts",
    "className": "ButtonCheckboxDirective",
    "description": "Add checkbox functionality to any element",
    "selector": "[btnCheckbox]",
    "inputs": [
      {
        "name": "btnCheckboxFalse",
        "defaultValue": "false",
        "type": "any",
        "description": "falsy value, will be set to ngModel "
      },
      {
        "name": "btnCheckboxTrue",
        "defaultValue": "true",
        "type": "any",
        "description": "truthy value, will be set to ngModel "
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ButtonRadioDirective": {
    "fileName": "src/buttons/button-radio.directive.ts",
    "className": "ButtonRadioDirective",
    "description": "Create radio buttons or groups of buttons.\nA value of a selected button is bound to a variable specified via ngModel.",
    "selector": "[btnRadio]",
    "inputs": [
      {
        "name": "btnRadio",
        "type": "any",
        "description": "radio button value, will be set to `ngModel` "
      },
      {
        "name": "uncheckable",
        "type": "boolean",
        "description": "if `true` radio button can be unchecked "
      },
      {
        "name": "value",
        "type": "any",
        "description": "current value of radio component or group "
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "CarouselComponent": {
    "fileName": "src/carousel/carousel.component.ts",
    "className": "CarouselComponent",
    "description": "Problems:\n1) if we set an active slide via model changes, .active class remains on a current slide.\n2) if we have only one slide, we shouldn't show prev/next nav buttons\n3) if first or last slide is active and noWrap is true, there should be \"disabled\" class on the nav buttons.\n4) default interval should be equal 5000",
    "selector": "carousel",
    "inputs": [
      {
        "name": "interval",
        "type": "number",
        "description": ""
      },
      {
        "name": "noPause",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "noTransition",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "noWrap",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "SlideComponent": {
    "fileName": "src/carousel/slide.component.ts",
    "className": "SlideComponent",
    "description": "",
    "selector": "slide",
    "inputs": [
      {
        "name": "active",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "direction",
        "type": "Direction",
        "description": ""
      },
      {
        "name": "index",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "CollapseDirective": {
    "fileName": "src/collapse/collapse.directive.ts",
    "className": "CollapseDirective",
    "description": "",
    "selector": "[collapse]",
    "inputs": [
      {
        "name": "collapse",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "collapsed",
        "description": ""
      },
      {
        "name": "expanded",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "ListenOptions": {
    "fileName": "src/component-loader/component-loader.class.ts",
    "className": "ListenOptions",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ComponentLoaderFactory": {
    "fileName": "src/component-loader/component-loader.factory.ts",
    "className": "ComponentLoaderFactory",
    "description": "",
    "methods": [
      {
        "name": "createLoader",
        "description": "@returns {ComponentLoader}",
        "args": [
          {
            "name": "_elementRef",
            "type": "ElementRef"
          },
          {
            "name": "_viewContainerRef",
            "type": "ViewContainerRef"
          },
          {
            "name": "_renderer",
            "type": "Renderer"
          }
        ],
        "returnType": "ComponentLoader<T>"
      }
    ],
    "properties": []
  },
  "DatePickerInnerComponent": {
    "fileName": "src/datepicker/datepicker-inner.component.ts",
    "className": "DatePickerInnerComponent",
    "description": "",
    "selector": "datepicker-inner",
    "inputs": [
      {
        "name": "activeDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "customClass",
        "type": "{ date: Date; mode: string; clazz: string; }[]",
        "description": ""
      },
      {
        "name": "dateDisabled",
        "type": "{ date: Date; mode: string; }[]",
        "description": ""
      },
      {
        "name": "datepickerMode",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatDay",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatDayHeader",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatDayTitle",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatMonth",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatMonthTitle",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatYear",
        "type": "string",
        "description": ""
      },
      {
        "name": "initDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "maxMode",
        "type": "string",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "minMode",
        "type": "string",
        "description": ""
      },
      {
        "name": "monthColLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "onlyCurrentMonth",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "shortcutPropagation",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeeks",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "startingDay",
        "type": "number",
        "description": ""
      },
      {
        "name": "yearColLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "yearRange",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "selectionDone",
        "description": ""
      },
      {
        "name": "update",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "DatePickerComponent": {
    "fileName": "src/datepicker/datepicker.component.ts",
    "className": "DatePickerComponent",
    "description": "",
    "selector": "datepicker",
    "inputs": [
      {
        "name": "activeDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "customClass",
        "type": "{ date: Date; mode: string; clazz: string; }[]",
        "description": ""
      },
      {
        "name": "dateDisabled",
        "type": "{ date: Date; mode: string; }[]",
        "description": ""
      },
      {
        "name": "datepickerMode",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatDay",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatDayHeader",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatDayTitle",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatMonth",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatMonthTitle",
        "type": "string",
        "description": ""
      },
      {
        "name": "formatYear",
        "type": "string",
        "description": ""
      },
      {
        "name": "initDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "maxMode",
        "type": "string",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "Date",
        "description": ""
      },
      {
        "name": "minMode",
        "type": "string",
        "description": ""
      },
      {
        "name": "monthColLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "onlyCurrentMonth",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "shortcutPropagation",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeeks",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "startingDay",
        "type": "number",
        "description": ""
      },
      {
        "name": "yearColLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "yearRange",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "selectionDone",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "DatepickerConfig": {
    "fileName": "src/datepicker/datepicker.config.ts",
    "className": "DatepickerConfig",
    "description": "",
    "methods": [],
    "properties": []
  },
  "DayPickerComponent": {
    "fileName": "src/datepicker/daypicker.component.ts",
    "className": "DayPickerComponent",
    "description": "",
    "selector": "daypicker",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "MonthPickerComponent": {
    "fileName": "src/datepicker/monthpicker.component.ts",
    "className": "MonthPickerComponent",
    "description": "",
    "selector": "monthpicker",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "YearPickerComponent": {
    "fileName": "src/datepicker/yearpicker.component.ts",
    "className": "YearPickerComponent",
    "description": "",
    "selector": "yearpicker",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "KeyboardNavDirective": {
    "fileName": "src/dropdown/dropdown-keyboard-nav.directive.ts",
    "className": "KeyboardNavDirective",
    "description": "",
    "selector": "[dropdown][dropdownKeyboardNav]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "DropdownMenuDirective": {
    "fileName": "src/dropdown/dropdown-menu.directive.ts",
    "className": "DropdownMenuDirective",
    "description": "",
    "selector": "[dropdownMenu]",
    "exportAs": "bs-dropdown-menu",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "DropdownToggleDirective": {
    "fileName": "src/dropdown/dropdown-toggle.directive.ts",
    "className": "DropdownToggleDirective",
    "description": "",
    "selector": "[dropdownToggle]",
    "exportAs": "bs-dropdown-toggle",
    "inputs": [
      {
        "name": "addToggleClass",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isDisabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "DropdownConfig": {
    "fileName": "src/dropdown/dropdown.config.ts",
    "className": "DropdownConfig",
    "description": "",
    "methods": [],
    "properties": []
  },
  "DropdownDirective": {
    "fileName": "src/dropdown/dropdown.directive.ts",
    "className": "DropdownDirective",
    "description": "",
    "selector": "[dropdown]",
    "exportAs": "bs-dropdown",
    "inputs": [
      {
        "name": "appendToBody",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "autoClose",
        "type": "string",
        "description": ""
      },
      {
        "name": "isOpen",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "keyboardNav",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "isOpenChange",
        "description": ""
      },
      {
        "name": "onToggle",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "DropdownMenuInterface": {
    "fileName": "src/dropdown/dropdown.interfaces.ts",
    "className": "DropdownMenuInterface",
    "description": "",
    "methods": [],
    "properties": []
  },
  "DropdownToggleInterface": {
    "fileName": "src/dropdown/dropdown.interfaces.ts",
    "className": "DropdownToggleInterface",
    "description": "",
    "methods": [],
    "properties": []
  },
  "ModalBackdropComponent": {
    "fileName": "src/modal/modal-backdrop.component.ts",
    "className": "ModalBackdropComponent",
    "description": "",
    "selector": "bs-modal-backdrop",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ModalOptions": {
    "fileName": "src/modal/modal-options.class.ts",
    "className": "ModalOptions",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "backdrop",
        "type": "boolean | \"static\"",
        "description": "Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click."
      },
      {
        "name": "ignoreBackdropClick",
        "type": "boolean",
        "description": "Ignore the backdrop click"
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "Closes the modal when escape key is pressed."
      },
      {
        "name": "show",
        "type": "boolean",
        "description": "Shows the modal when initialized."
      }
    ]
  },
  "ModalDirective": {
    "fileName": "src/modal/modal.component.ts",
    "className": "ModalDirective",
    "description": "",
    "selector": "[bsModal]",
    "exportAs": "bs-modal",
    "inputs": [
      {
        "name": "config",
        "type": "ModalOptions",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onHidden",
        "description": ""
      },
      {
        "name": "onHide",
        "description": ""
      },
      {
        "name": "onShow",
        "description": ""
      },
      {
        "name": "onShown",
        "description": ""
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "toggle",
        "description": "Public methods ",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "getConfig",
        "description": "Private methods ",
        "args": [
          {
            "name": "config",
            "type": "ModalOptions"
          }
        ],
        "returnType": "ModalOptions"
      },
      {
        "name": "showElement",
        "description": "Show dialog",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "resetAdjustments",
        "description": "Events tricks ",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "checkScrollbar",
        "description": "Scroll bar tricks ",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "PagerComponent": {
    "fileName": "src/pagination/pager.component.ts",
    "className": "PagerComponent",
    "description": "",
    "selector": "pager",
    "inputs": [
      {
        "name": "align",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "boundaryLinks",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "directionLinks",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "firstText",
        "type": "string",
        "description": ""
      },
      {
        "name": "itemsPerPage",
        "type": "number",
        "description": ""
      },
      {
        "name": "lastText",
        "type": "string",
        "description": ""
      },
      {
        "name": "maxSize",
        "type": "number",
        "description": ""
      },
      {
        "name": "nextText",
        "type": "string",
        "description": ""
      },
      {
        "name": "pageBtnClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "previousText",
        "type": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "totalItems",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "numPages",
        "description": ""
      },
      {
        "name": "pageChanged",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "PageChangedEvent": {
    "fileName": "src/pagination/pagination.component.ts",
    "className": "PageChangedEvent",
    "description": "",
    "methods": [],
    "properties": []
  },
  "PaginationComponent": {
    "fileName": "src/pagination/pagination.component.ts",
    "className": "PaginationComponent",
    "description": "",
    "selector": "pagination",
    "inputs": [
      {
        "name": "align",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "boundaryLinks",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "directionLinks",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "firstText",
        "type": "string",
        "description": ""
      },
      {
        "name": "itemsPerPage",
        "type": "number",
        "description": ""
      },
      {
        "name": "lastText",
        "type": "string",
        "description": ""
      },
      {
        "name": "maxSize",
        "type": "number",
        "description": ""
      },
      {
        "name": "nextText",
        "type": "string",
        "description": ""
      },
      {
        "name": "pageBtnClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "previousText",
        "type": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "totalItems",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "numPages",
        "description": ""
      },
      {
        "name": "pageChanged",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "PaginationConfig": {
    "fileName": "src/pagination/pagination.config.ts",
    "className": "PaginationConfig",
    "description": "",
    "methods": [],
    "properties": []
  },
  "PopoverConfig": {
    "fileName": "src/popover/popover-config.ts",
    "className": "PopoverConfig",
    "description": "Configuration service for the Popover directive.\nYou can inject this service, typically in your root component, and customize\nthe values of its properties in order to provide default values for all the\npopovers used in the application.",
    "methods": [],
    "properties": []
  },
  "PopoverContainerComponent": {
    "fileName": "src/popover/popover-container.component.ts",
    "className": "PopoverContainerComponent",
    "description": "",
    "selector": "popover-container",
    "inputs": [
      {
        "name": "placement",
        "type": "string",
        "description": ""
      },
      {
        "name": "title",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "PopoverDirective": {
    "fileName": "src/popover/popover.directive.ts",
    "className": "PopoverDirective",
    "description": "A lightweight, extensible directive for fancy popover creation.",
    "selector": "[popover]",
    "exportAs": "bs-popover",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the popover should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "isOpen",
        "type": "boolean",
        "description": "Returns whether or not the popover is currently being shown"
      },
      {
        "name": "placement",
        "type": "\"top\" | \"bottom\" | \"left\" | \"right\"",
        "description": "Placement of a popover. Accepts: \"top\", \"bottom\", \"left\", \"right\""
      },
      {
        "name": "popover",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as popover."
      },
      {
        "name": "popoverTitle",
        "type": "string",
        "description": "Title of a popover."
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "Specifies events that should trigger. Supports a space separated list of\nevent names."
      }
    ],
    "outputs": [
      {
        "name": "onHidden",
        "description": "Emits an event when the popover is hidden"
      },
      {
        "name": "onShown",
        "description": "Emits an event when the popover is shown"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "show",
        "description": "Opens an element’s popover. This is considered a “manual” triggering of\nthe popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "hide",
        "description": "Closes an element’s popover. This is considered a “manual” triggering of\nthe popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "Toggles an element’s popover. This is considered a “manual” triggering of\nthe popover.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "Positioning": {
    "fileName": "src/positioning/ng-positioning.ts",
    "className": "Positioning",
    "description": "@copyright Valor Software\n@copyright Angular ng-bootstrap team",
    "methods": [],
    "properties": []
  },
  "PositioningOptions": {
    "fileName": "src/positioning/positioning.service.ts",
    "className": "PositioningOptions",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "appendToBody",
        "type": "boolean",
        "description": "If true component will be attached to body "
      },
      {
        "name": "attachment",
        "type": "string",
        "description": "A string of the form 'vert-attachment horiz-attachment' or 'placement'\n- placement can be \"top\", \"bottom\", \"left\", \"right\"\nnot yet supported:\n- vert-attachment can be any of 'top', 'middle', 'bottom'\n- horiz-attachment can be any of 'left', 'center', 'right'"
      },
      {
        "name": "element",
        "type": "string | ElementRef | HTMLElement",
        "description": "The DOM element, ElementRef, or a selector string of an element which will be moved "
      },
      {
        "name": "offset",
        "type": "string",
        "description": "A string of the form 'vert-offset horiz-offset'\n- vert-offset and horiz-offset can be of the form \"20px\" or \"55%\""
      },
      {
        "name": "target",
        "type": "string | ElementRef | HTMLElement",
        "description": "The DOM element, ElementRef, or a selector string of an element which the element will be attached to  "
      },
      {
        "name": "targetAttachment",
        "type": "string",
        "description": "A string similar to `attachment`. The one difference is that, if it's not provided, `targetAttachment` will assume the mirror image of `attachment`. "
      },
      {
        "name": "targetOffset",
        "type": "string",
        "description": "A string similar to `offset`, but referring to the offset of the target "
      }
    ]
  },
  "PositioningService": {
    "fileName": "src/positioning/positioning.service.ts",
    "className": "PositioningService",
    "description": "",
    "methods": [],
    "properties": []
  },
  "BarComponent": {
    "fileName": "src/progressbar/bar.component.ts",
    "className": "BarComponent",
    "description": "",
    "selector": "bar",
    "inputs": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ProgressDirective": {
    "fileName": "src/progressbar/progress.directive.ts",
    "className": "ProgressDirective",
    "description": "",
    "selector": "bs-progress, [progress]",
    "inputs": [
      {
        "name": "animate",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "max",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "ProgressbarComponent": {
    "fileName": "src/progressbar/progressbar.component.ts",
    "className": "ProgressbarComponent",
    "description": "",
    "selector": "progressbar",
    "inputs": [
      {
        "name": "animate",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "max",
        "type": "number",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "number",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "RatingComponent": {
    "fileName": "src/rating/rating.component.ts",
    "className": "RatingComponent",
    "description": "",
    "selector": "rating",
    "inputs": [
      {
        "name": "max",
        "type": "number",
        "description": ""
      },
      {
        "name": "ratingStates",
        "type": "{ stateOn: string; stateOff: string; }[]",
        "description": ""
      },
      {
        "name": "readonly",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "stateOff",
        "type": "string",
        "description": ""
      },
      {
        "name": "stateOn",
        "type": "string",
        "description": ""
      },
      {
        "name": "titles",
        "type": "string[]",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onHover",
        "description": ""
      },
      {
        "name": "onLeave",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "NgTranscludeDirective": {
    "fileName": "src/tabs/ng-transclude.directive.ts",
    "className": "NgTranscludeDirective",
    "description": "",
    "selector": "[ngTransclude]",
    "inputs": [
      {
        "name": "ngTransclude",
        "type": "TemplateRef<any>",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TabHeadingDirective": {
    "fileName": "src/tabs/tab-heading.directive.ts",
    "className": "TabHeadingDirective",
    "description": "",
    "selector": "[tabHeading]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TabDirective": {
    "fileName": "src/tabs/tab.directive.ts",
    "className": "TabDirective",
    "description": "",
    "selector": "tab, [tab]",
    "inputs": [
      {
        "name": "active",
        "type": "boolean",
        "description": "tab active state toggle "
      },
      {
        "name": "customClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "heading",
        "type": "string",
        "description": ""
      },
      {
        "name": "removable",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "deselect",
        "description": ""
      },
      {
        "name": "removed",
        "description": ""
      },
      {
        "name": "select",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "TabsetComponent": {
    "fileName": "src/tabs/tabset.component.ts",
    "className": "TabsetComponent",
    "description": "",
    "selector": "tabset",
    "inputs": [
      {
        "name": "justified",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "vertical",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TabsetConfig": {
    "fileName": "src/tabs/tabset.config.ts",
    "className": "TabsetConfig",
    "description": "",
    "methods": [],
    "properties": []
  },
  "TimepickerComponent": {
    "fileName": "src/timepicker/timepicker.component.ts",
    "className": "TimepickerComponent",
    "description": "",
    "selector": "timepicker",
    "inputs": [
      {
        "name": "arrowkeys",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hourStep",
        "type": "number",
        "description": ""
      },
      {
        "name": "max",
        "type": "Date",
        "description": ""
      },
      {
        "name": "meridians",
        "type": "string[]",
        "description": ""
      },
      {
        "name": "min",
        "type": "Date",
        "description": ""
      },
      {
        "name": "minuteStep",
        "type": "number",
        "description": ""
      },
      {
        "name": "mousewheel",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "readonlyInput",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showMeridian",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showSpinners",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TimepickerConfig": {
    "fileName": "src/timepicker/timepicker.config.ts",
    "className": "TimepickerConfig",
    "description": "",
    "methods": [],
    "properties": []
  },
  "TooltipContainerComponent": {
    "fileName": "src/tooltip/tooltip-container.component.ts",
    "className": "TooltipContainerComponent",
    "description": "",
    "selector": "bs-tooltip-container",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TooltipOptions": {
    "fileName": "src/tooltip/tooltip-options.class.ts",
    "className": "TooltipOptions",
    "description": "",
    "methods": [],
    "properties": []
  },
  "TooltipConfig": {
    "fileName": "src/tooltip/tooltip.config.ts",
    "className": "TooltipConfig",
    "description": "",
    "methods": [],
    "properties": []
  },
  "TooltipDirective": {
    "fileName": "src/tooltip/tooltip.directive.ts",
    "className": "TooltipDirective",
    "description": "",
    "selector": "[tooltip], [tooltipHtml]",
    "exportAs": "bs-tooltip",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the tooltip should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "description": "Allows to disable tooltip"
      },
      {
        "name": "isOpen",
        "type": "boolean",
        "description": "Returns whether or not the tooltip is currently being shown"
      },
      {
        "name": "placement",
        "type": "string",
        "description": "Placement of a tooltip. Accepts: \"top\", \"bottom\", \"left\", \"right\""
      },
      {
        "name": "tooltip",
        "type": "string | TemplateRef<any>",
        "description": "Content to be displayed as popover."
      },
      {
        "name": "tooltipAnimation",
        "defaultValue": "true",
        "type": "boolean",
        "description": "@deprecated "
      },
      {
        "name": "tooltipAppendToBody",
        "type": "boolean",
        "description": "@deprecated "
      },
      {
        "name": "tooltipClass",
        "type": "string",
        "description": "@deprecated "
      },
      {
        "name": "tooltipContext",
        "type": "any",
        "description": "@deprecated "
      },
      {
        "name": "tooltipEnable",
        "type": "boolean",
        "description": "@deprecated "
      },
      {
        "name": "tooltipFadeDuration",
        "defaultValue": "150",
        "type": "number",
        "description": "@deprecated "
      },
      {
        "name": "tooltipHtml",
        "type": "string | TemplateRef<any>",
        "description": "@deprecated "
      },
      {
        "name": "tooltipIsOpen",
        "type": "boolean",
        "description": "@deprecated "
      },
      {
        "name": "tooltipPlacement",
        "type": "string",
        "description": "@deprecated "
      },
      {
        "name": "tooltipPopupDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "tooltipTitle",
        "type": "string",
        "description": "Title of a popover."
      },
      {
        "name": "tooltipTrigger",
        "type": "string | string[]",
        "description": "@deprecated "
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "Specifies events that should trigger. Supports a space separated list of\nevent names."
      }
    ],
    "outputs": [
      {
        "name": "onHidden",
        "description": "Emits an event when the tooltip is hidden"
      },
      {
        "name": "onShown",
        "description": "Emits an event when the tooltip is shown"
      },
      {
        "name": "tooltipChange",
        "description": ""
      },
      {
        "name": "tooltipStateChanged",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "_appendToBody",
        "type": "boolean",
        "description": "@deprecated "
      },
      {
        "name": "_enable",
        "type": "boolean",
        "description": "@deprecated "
      },
      {
        "name": "_isOpen",
        "type": "boolean",
        "description": "@deprecated "
      }
    ],
    "methods": [
      {
        "name": "toggle",
        "description": "Toggles an element’s tooltip. This is considered a “manual” triggering of\nthe popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "show",
        "description": "Opens an element’s tooltip. This is considered a “manual” triggering of\nthe popover.",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "hide",
        "description": "Closes an element’s tooltip. This is considered a “manual” triggering of\nthe popover.",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "TypeaheadContainerComponent": {
    "fileName": "src/typeahead/typeahead-container.component.ts",
    "className": "TypeaheadContainerComponent",
    "description": "",
    "selector": "typeahead-container",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TypeaheadDirective": {
    "fileName": "src/typeahead/typeahead.directive.ts",
    "className": "TypeaheadDirective",
    "description": "",
    "selector": "[typeahead][ngModel],[typeahead][formControlName]",
    "inputs": [
      {
        "name": "container",
        "type": "string",
        "description": "A selector specifying the element the typeahead should be appended to.\nCurrently only supports \"body\"."
      },
      {
        "name": "typeahead",
        "type": "any",
        "description": ""
      },
      {
        "name": "typeaheadAsync",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "typeaheadGroupField",
        "type": "string",
        "description": ""
      },
      {
        "name": "typeaheadItemTemplate",
        "type": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "typeaheadLatinize",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "typeaheadMinLength",
        "type": "number",
        "description": ""
      },
      {
        "name": "typeaheadOptionField",
        "type": "string",
        "description": ""
      },
      {
        "name": "typeaheadOptionsLimit",
        "type": "number",
        "description": ""
      },
      {
        "name": "typeaheadPhraseDelimiters",
        "defaultValue": "'\"",
        "type": "string",
        "description": ""
      },
      {
        "name": "typeaheadSingleWords",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "typeaheadWaitMs",
        "type": "number",
        "description": ""
      },
      {
        "name": "typeaheadWordDelimiters",
        "defaultValue": " ",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "typeaheadLoading",
        "description": ""
      },
      {
        "name": "typeaheadNoResults",
        "description": ""
      },
      {
        "name": "typeaheadOnSelect",
        "description": ""
      }
    ],
    "properties": [],
    "methods": []
  },
  "Trigger": {
    "fileName": "src/utils/trigger.class.ts",
    "className": "Trigger",
    "description": "@copyright Valor Software\n@copyright Angular ng-bootstrap team",
    "methods": [],
    "properties": []
  }
};
