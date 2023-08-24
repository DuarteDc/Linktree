import { EntryCollection } from 'contentful';
import { type LinksItemResponse, type UserResponse, ContentTypes, contentfulClient } from '../lib/contentful';

const getPersonalLinksData = contentfulClient.getEntries<LinksItemResponse>({
    content_type: ContentTypes.PersonalLinks,
    order: ["sys.createdAt"],
});

const getProfesionalLinksData = contentfulClient.getEntries<LinksItemResponse>({
    content_type: ContentTypes.ProfesionalLinks,
    order: ["sys.createdAt"],
});

const getUserData = contentfulClient.getEntries<UserResponse>({
    content_type: ContentTypes.User,
});

export default [
    getPersonalLinksData as Promise<EntryCollection<LinksItemResponse, undefined, string>>,
    getProfesionalLinksData as Promise<EntryCollection<LinksItemResponse, undefined, string>>,
    getUserData as Promise<EntryCollection<UserResponse, undefined, string>>,
]

