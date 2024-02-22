import { MockProvider } from '@acme/acme.testing.mock-provider';
import { MyProjectWeb } from "./my-project-web.js";
    
export const MyProjectWebBasic = () => {
  return (
    <MockProvider noTheme>
      <MyProjectWeb />
    </MockProvider>
  );
}
