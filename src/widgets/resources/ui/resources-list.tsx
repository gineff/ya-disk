import { Fragment } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { useGetResources } from '../lib/use-get-resources';
import { Loader } from '@/shared/loader';
import { Stack, Box, Divider } from '@mui/material';
import { Resource } from './resource';
import { checkNeedDivider } from '../lib/check-need-divider';

export const ResourcesList = () => {
  const needDivider = checkNeedDivider();
  const { data, error, isLoading } = useGetResources();

  const errorMessage = (error as SerializedError)?.message || 'An error occurred';

  if (error) {
    return <div>Error: {errorMessage}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Stack direction="row" sx={{ flexWrap: 'wrap', mt: 3 }} rowGap={2} columnGap={2}>
        {data?.map((resource) => (
          <Fragment key={resource.resource_id}>
            {needDivider(resource.type) && (
              <Box sx={{ flexBasis: '100%', padding: '1rem' }}>
                {' '}
                <Divider variant="middle" color="white" sx={{ opacity: 0.1 }} />
              </Box>
            )}
            <Resource {...resource} />
          </Fragment>
        ))}
      </Stack>
    </>
  );
};
