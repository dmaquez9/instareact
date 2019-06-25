module.exports =  {
  root: true,
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended', 
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', 
    'prettier/react',
    "prettier/@typescript-eslint"
  ],
  parserOptions:  {

    project: './tsconfig.json'
  },
  rules:  {},
  settings:  {
    react:  {
      version:  'detect',  
    },
  },
};