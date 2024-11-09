import { Fragment } from 'react';
import { useGetResources } from '../lib/use-get-resources';
import { Loader } from '@/shared/loader';
import { Stack, Box, Divider, Modal } from '@mui/material';
import { Resource } from './resource';
import { checkNeedDivider } from '../lib/check-need-divider';
import { ResourceDialog } from './resource-dialog';

export const ResourcesList = () => {
  const needDivider = checkNeedDivider();
  const { data, error, isLoading, isFetching } = useGetResources();
  const errorMessage = (error as ApiError)?.data.message || 'An error occurred';

  if (error) {
    return <div>Error: {errorMessage}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const renderDivider = (resourceType: string) => {
    const shouldRenderDivider = needDivider(resourceType);
    return shouldRenderDivider ? (
      <Box sx={{ flexBasis: '100%', padding: '1rem' }}>
        <Divider variant="middle" color="white" sx={{ opacity: 0.1 }} />
      </Box>
    ) : null;
  };

  return (
    <>
      <Stack direction="row" sx={{ flexWrap: 'wrap', mt: 3 }} rowGap={2} columnGap={2}>
        {data?.map((resource) => (
          <Fragment key={resource.resource_id}>
            {renderDivider(resource.type)}
            <Resource {...resource} />
          </Fragment>
        ))}
      </Stack>
      <ResourceDialog resources={data} />
      <Modal open={isFetching}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Loader />
        </Box>
      </Modal>
    </>
  );
};
