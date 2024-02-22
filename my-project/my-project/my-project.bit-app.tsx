import { Platform } from '@bitdev/platforms.platform';

const MyProjectWeb = import.meta.resolve('@my-org/my-project.my-project-web');
const MyProjectService = import.meta.resolve('@my-org/my-project.my-project-service');

export const MyProject = Platform.from({
  name: 'my-project',

  frontends: {
    main: MyProjectWeb,
    mainPortRange: [3000, 3100]
  },

  backends: {
    main: MyProjectService,
  },
});

export default MyProject;
