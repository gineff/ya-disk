import type { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/shared/base-layout';
import { DiskPage } from '@/pages/disk';

export const AppRouter: FC = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route index element={<Navigate to="/disk" replace />} />
      <Route path="/disk/:path?" element={<DiskPage />} />
    </Route>
  </Routes>
);
