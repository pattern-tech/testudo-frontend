import { AssetManagement } from '@/scenes/dashboard/assetManagement/AssetManagement';
import { Layout } from '@/scenes/dashboard/layout/Layout';

export default function dashboard() {
  return (
    <Layout currentMenu="Asset management">
      <AssetManagement />
    </Layout>
  );
}
