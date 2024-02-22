import { MyProjectService } from './my-project-service.js';

describe('corporate service', () => {
  it('should say hello', async () => {
    const myProjectService = MyProjectService.from();
    const announcements = await myProjectService.listAnnouncements();
    expect(announcements.length).toEqual(2);
  })
});
