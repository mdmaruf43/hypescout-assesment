export default interface ProfileDataType {
    id:             number;
    name:           string;
    photo:          string;
    join_at:        string;
    location:       string;
    follwers:       string;
    categories:     string;
    gender:         string;
    social:         SocialDataType;
}

interface SocialDataType {
    facebook_link:   string;
    instagrame_link: string;
    linkedin_link:   string;
    twitter_link:    string;
}