const VFormStub = {
  render: () => {
    return "<v-form-stub><slot /></v-form-stub>";
  },
  methods: {
    validate: jest.fn()
  }
};
export const mockCustomElements = [
  "my-header",
  "router-view",
  "v-app",
  "v-avatar",
  "v-container",
  "v-content",
  "v-layout",
  "v-flex",
  "v-card",
  "v-card-text",
  "v-card-actions",
  "v-divider",
  "v-form",
  "v-text-field",
  "v-tooltip",
  "v-toolbar",
  "v-toolbar-side-icon",
  "v-toolbar-title",
  "v-toolbar-items",
  "v-menu",
  "v-menu-transition",
  "v-navigation-drawer",
  "v-list",
  "v-list-tile",
  "v-list-tile-avatar",
  "v-list-tile-content",
  "v-list-tile-title",
  "v-list-tile-sub-title",
  "v-list-tile-action",
  "v-progress-linear",
  "v-progress-circular",
  "v-btn",
  "v-icon",
  "v-switch",
  "v-select",
  "v-spacer"
];
