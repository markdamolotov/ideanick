/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-idiomatic-order'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties'
  ]
}
