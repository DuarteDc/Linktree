import contentful, { EntryFieldTypes } from "contentful";

export enum ContentTypes {
    PersonalLinks = "personalLinks",
    ProfesionalLinks = "profesionalLinks",
    User = "user"
}

export interface LinksItemResponse {
    contentTypeId: ContentTypes.PersonalLinks | ContentTypes.ProfesionalLinks
    fields: {
        title: EntryFieldTypes.Text
        link: EntryFieldTypes.Text,
        icon: EntryFieldTypes.Text,
    }
}

export interface UserResponse {
    contentTypeId: ContentTypes.User,
    fields: {
        name: EntryFieldTypes.Text
        lastName: EntryFieldTypes.Text,
        description: EntryFieldTypes.Text,
        resume: EntryFieldTypes.Object,
        imageProfile: EntryFieldTypes.Object,
    }
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
        ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
        : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});