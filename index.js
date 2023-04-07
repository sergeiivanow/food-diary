import {STORYBOOK_ENABLED} from 'env'

STORYBOOK_ENABLED === 'true' ? import('./.storybook') : import('./src/app')
