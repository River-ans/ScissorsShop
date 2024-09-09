import { fetchDisplayedBrands } from '@/api/brands';
import { BrandsResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

export const useDisplayedBrandsQuery = () => {
  return useQuery<BrandsResponse>({
    queryKey: ['displayedBrands'],
    queryFn: () => fetchDisplayedBrands(),
  });
};
