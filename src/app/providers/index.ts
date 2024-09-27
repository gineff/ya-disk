//import compose from './compose';
import { compose } from '@reduxjs/toolkit';
import { withStore } from './withStore.provider';
import { withTheme } from './withTheme.provider';
import { withRouter } from './withRouter.provider';
import { ProviderReturnType } from './types';
/** Используем функцию compose для создания HOC withProviders,
который последовательно оборачивает компонент в провайдеры маршрутизатора, хранилища и темы. */

export const withProviders = compose<ProviderReturnType>(withStore, withTheme, withRouter);
