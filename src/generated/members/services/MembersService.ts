/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BiographyExperienceListItem } from '../models/BiographyExperienceListItem';
import type { ContactInformationListItem } from '../models/ContactInformationListItem';
import type { DebateContributionMembersServiceSearchResult } from '../models/DebateContributionMembersServiceSearchResult';
import type { EarlyDayMotionMembersServiceSearchResult } from '../models/EarlyDayMotionMembersServiceSearchResult';
import type { ElectionResultItem } from '../models/ElectionResultItem';
import type { House } from '../models/House';
import type { MemberBiographyItem } from '../models/MemberBiographyItem';
import type { MemberFocusListItem } from '../models/MemberFocusListItem';
import type { MemberHistoryItem } from '../models/MemberHistoryItem';
import type { MemberItem } from '../models/MemberItem';
import type { MemberMembersServiceSearchResult } from '../models/MemberMembersServiceSearchResult';
import type { PortraitCropEnum } from '../models/PortraitCropEnum';
import type { RegisteredInterestCategoryListItem } from '../models/RegisteredInterestCategoryListItem';
import type { StaffListItem } from '../models/StaffListItem';
import type { StringItem } from '../models/StringItem';
import type { VoteMembersServiceSearchResult } from '../models/VoteMembersServiceSearchResult';
import type { WrittenQuestionMembersServiceSearchResult } from '../models/WrittenQuestionMembersServiceSearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MembersService {
    /**
     * Returns a list of current members of the Commons or Lords
     * @returns MemberMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiMembersSearch({
        name,
        location,
        postTitle,
        partyId,
        house,
        constituencyId,
        nameStartsWith,
        gender,
        membershipStartedSince,
        membershipEndedMembershipEndedSince,
        membershipEndedMembershipEndReasonIds,
        membershipInDateRangeWasMemberOnOrAfter,
        membershipInDateRangeWasMemberOnOrBefore,
        membershipInDateRangeWasMemberOfHouse,
        isEligible,
        isCurrentMember,
        policyInterestId,
        experience,
        skip,
        take = 20,
    }: {
        /**
         * Members where name contains term specified
         */
        name?: string,
        /**
         * Members where postcode or geographical location matches the term specified
         * Searches for current constituencies with full postcode, or outward code; and name of constituency
         * If there are no results based on above, searches for all current and past constituencies in specified area of UK.
         * To explicitly search by area (ignoring name of constituency); please prefix query with `region:`.
         */
        location?: string,
        /**
         * Members which have held the post specified
         */
        postTitle?: string,
        /**
         * Members which are currently affiliated with party with party ID
         */
        partyId?: number,
        /**
         * Members where their most recent house is the house specified
         */
        house?: House,
        /**
         * Members which currently hold the constituency with constituency id
         */
        constituencyId?: number,
        /**
         * Members with surname begining with letter(s) specified
         */
        nameStartsWith?: string,
        /**
         * Members with the gender specified
         */
        gender?: string,
        /**
         * Members who started on or after the date given
         */
        membershipStartedSince?: string,
        /**
         * Members who left the House on or after the date given
         */
        membershipEndedMembershipEndedSince?: string,
        membershipEndedMembershipEndReasonIds?: Array<number>,
        /**
         * Members who were active on or after the date specified
         */
        membershipInDateRangeWasMemberOnOrAfter?: string,
        /**
         * Members who were active on or before the date specified
         */
        membershipInDateRangeWasMemberOnOrBefore?: string,
        /**
         * Members who were active in the house specifid
         */
        membershipInDateRangeWasMemberOfHouse?: House,
        /**
         * Members currently Eligible to sit in their House
         */
        isEligible?: boolean,
        /**
         * Members who are current or former members
         */
        isCurrentMember?: boolean,
        /**
         * Members with specified policy interest
         */
        policyInterestId?: number,
        /**
         * Members with specified experience
         */
        experience?: string,
        /**
         * The number of records to skip from the first, default is 0
         */
        skip?: number,
        /**
         * The number of records to return, default is 20. Maximum is 20
         */
        take?: number,
    }): CancelablePromise<MemberMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/Search',
            query: {
                'Name': name,
                'Location': location,
                'PostTitle': postTitle,
                'PartyId': partyId,
                'House': house,
                'ConstituencyId': constituencyId,
                'NameStartsWith': nameStartsWith,
                'Gender': gender,
                'MembershipStartedSince': membershipStartedSince,
                'MembershipEnded.MembershipEndedSince': membershipEndedMembershipEndedSince,
                'MembershipEnded.MembershipEndReasonIds': membershipEndedMembershipEndReasonIds,
                'MembershipInDateRange.WasMemberOnOrAfter': membershipInDateRangeWasMemberOnOrAfter,
                'MembershipInDateRange.WasMemberOnOrBefore': membershipInDateRangeWasMemberOnOrBefore,
                'MembershipInDateRange.WasMemberOfHouse': membershipInDateRangeWasMemberOfHouse,
                'IsEligible': isEligible,
                'IsCurrentMember': isCurrentMember,
                'PolicyInterestId': policyInterestId,
                'Experience': experience,
                'skip': skip,
                'take': take,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns a list of members of the Commons or Lords
     * @returns MemberMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiMembersSearchHistorical({
        name,
        dateToSearchFor,
        skip,
        take = 20,
    }: {
        /**
         * Members with names containing the term specified
         */
        name?: string,
        /**
         * Members that were an active member of the Commons or Lords on the date specified
         */
        dateToSearchFor?: string,
        /**
         * The number of records to skip from the first, default is 0
         */
        skip?: number,
        /**
         * The number of records to return, default is 20. Maximum is 20
         */
        take?: number,
    }): CancelablePromise<MemberMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/SearchHistorical',
            query: {
                'name': name,
                'dateToSearchFor': dateToSearchFor,
                'skip': skip,
                'take': take,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Return member by ID
     * @returns MemberItem Success
     * @throws ApiError
     */
    public static getApiMembers({
        id,
        detailsForDate,
    }: {
        /**
         * Member by ID specified
         */
        id: number,
        /**
         * Member object will be populated with details from the date specified
         */
        detailsForDate?: string,
    }): CancelablePromise<MemberItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}',
            path: {
                'id': id,
            },
            query: {
                'detailsForDate': detailsForDate,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return biography of member by ID
     * @returns MemberBiographyItem Success
     * @throws ApiError
     */
    public static getApiMembersBiography({
        id,
    }: {
        /**
         * Biography of Member by ID specified
         */
        id: number,
    }): CancelablePromise<MemberBiographyItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Biography',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of contact details of member by ID
     * @returns ContactInformationListItem Success
     * @throws ApiError
     */
    public static getApiMembersContact({
        id,
    }: {
        /**
         * Contact details of Member by ID specified
         */
        id: number,
    }): CancelablePromise<ContactInformationListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Contact',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return contribution summary of member by ID
     * @returns DebateContributionMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiMembersContributionSummary({
        id,
        page,
    }: {
        /**
         * Contribution summary of Member by ID specified
         */
        id: number,
        page?: number,
    }): CancelablePromise<DebateContributionMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/ContributionSummary',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of early day motions of member by ID
     * @returns EarlyDayMotionMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiMembersEdms({
        id,
        page,
    }: {
        /**
         * Early day motions of Member by ID specified
         */
        id: number,
        page?: number,
    }): CancelablePromise<EarlyDayMotionMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Edms',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return experience of member by ID
     * @returns BiographyExperienceListItem Success
     * @throws ApiError
     */
    public static getApiMembersExperience({
        id,
    }: {
        /**
         * Experience of Member by ID specified
         */
        id: number,
    }): CancelablePromise<BiographyExperienceListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Experience',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of areas of focus of member by ID
     * @returns MemberFocusListItem Success
     * @throws ApiError
     */
    public static getApiMembersFocus({
        id,
    }: {
        /**
         * Areas of focus of Member by ID specified
         */
        id: number,
    }): CancelablePromise<MemberFocusListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Focus',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return members by ID with list of their historical names, parties and memberships
     * @returns MemberHistoryItem Success
     * @throws ApiError
     */
    public static getApiMembersHistory({
        ids,
    }: {
        /**
         * List of MemberIds to find
         */
        ids?: Array<number>,
    }): CancelablePromise<Array<MemberHistoryItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/History',
            query: {
                'ids': ids,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return latest election result of member by ID
     * @returns ElectionResultItem Success
     * @throws ApiError
     */
    public static getApiMembersLatestElectionResult({
        id,
    }: {
        /**
         * Latest election result of Member by ID specified
         */
        id: number,
    }): CancelablePromise<ElectionResultItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/LatestElectionResult',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return portrait of member by ID
     * @returns any Success
     * @throws ApiError
     */
    public static getApiMembersPortrait({
        id,
        cropType,
        webVersion = true,
    }: {
        /**
         * Portrait of Member by ID specified
         */
        id: number,
        cropType?: PortraitCropEnum,
        webVersion?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Portrait',
            path: {
                'id': id,
            },
            query: {
                'cropType': cropType,
                'webVersion': webVersion,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return portrait url of member by ID
     * @returns StringItem Success
     * @throws ApiError
     */
    public static getApiMembersPortraitUrl({
        id,
    }: {
        /**
         * Portrait url of Member by ID specified
         */
        id: number,
    }): CancelablePromise<StringItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/PortraitUrl',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of registered interests of member by ID
     * @returns RegisteredInterestCategoryListItem Success
     * @throws ApiError
     */
    public static getApiMembersRegisteredInterests({
        id,
        house,
    }: {
        /**
         * Registered interests of Member by ID specified
         */
        id: number,
        /**
         * Registered interests of Member by House specified
         */
        house?: House,
    }): CancelablePromise<RegisteredInterestCategoryListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/RegisteredInterests',
            path: {
                'id': id,
            },
            query: {
                'house': house,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of staff of member by ID
     * @returns StaffListItem Success
     * @throws ApiError
     */
    public static getApiMembersStaff({
        id,
    }: {
        /**
         * Staff of Member by ID specified
         */
        id: number,
    }): CancelablePromise<StaffListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Staff',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return synopsis of member by ID
     * @returns StringItem Success
     * @throws ApiError
     */
    public static getApiMembersSynopsis({
        id,
    }: {
        /**
         * Synopsis of Member by ID specified
         */
        id: number,
    }): CancelablePromise<StringItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Synopsis',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return thumbnail of member by ID
     * @returns any Success
     * @throws ApiError
     */
    public static getApiMembersThumbnail({
        id,
    }: {
        /**
         * Thumbnail of Member by ID specified
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Thumbnail',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return thumbnail url of member by ID
     * @returns StringItem Success
     * @throws ApiError
     */
    public static getApiMembersThumbnailUrl({
        id,
    }: {
        /**
         * Thumbnail url of Member by ID specified
         */
        id: number,
    }): CancelablePromise<StringItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/ThumbnailUrl',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of votes by member by ID
     * @returns VoteMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiMembersVoting({
        id,
        house,
        page,
    }: {
        /**
         * Votes by Member by ID specified
         */
        id: number,
        house: House,
        page?: number,
    }): CancelablePromise<VoteMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/Voting',
            path: {
                'id': id,
            },
            query: {
                'house': house,
                'page': page,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Return list of written questions by member by ID
     * @returns WrittenQuestionMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiMembersWrittenQuestions({
        id,
        page,
    }: {
        /**
         * Written questions by Member by ID specified
         */
        id: number,
        page?: number,
    }): CancelablePromise<WrittenQuestionMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Members/{id}/WrittenQuestions',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
