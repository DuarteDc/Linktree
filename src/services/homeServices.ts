import { EntryCollection } from 'contentful';
import { type LinksItemResponse, type UserResponse, ContentTypes, contentfulClient } from '../lib/contentful';

const getPersonalLinksData = await contentfulClient.getEntries<LinksItemResponse>({
    content_type: ContentTypes.PersonalLinks,
    order: ["sys.createdAt"],
});

const getProfesionalLinksData = await contentfulClient.getEntries<LinksItemResponse>({
    content_type: ContentTypes.ProfesionalLinks,
    order: ["sys.createdAt"],
});

const getUserData = await contentfulClient.getEntries<UserResponse>({
    content_type: ContentTypes.User,
});

export default [
    getPersonalLinksData as EntryCollection<LinksItemResponse, undefined, string>,
    getProfesionalLinksData as EntryCollection<LinksItemResponse, undefined, string>,
    getUserData as EntryCollection<UserResponse, undefined, string>,
]

