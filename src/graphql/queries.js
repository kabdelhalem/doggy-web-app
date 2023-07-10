/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        familiesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      Num1
      Num2
      Description
      Pet {
        id
        Name
        familiesID
        createdAt
        updatedAt
      }
      familiesID
      createdAt
      updatedAt
      eventPetId
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Num1
        Num2
        Description
        Pet {
          id
          Name
          familiesID
          createdAt
          updatedAt
        }
        familiesID
        createdAt
        updatedAt
        eventPetId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        familiesID
        Email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFamilies = /* GraphQL */ `
  query GetFamilies($id: ID!) {
    getFamilies(id: $id) {
      id
      Family_Name
      Users {
        items {
          id
          Name
          familiesID
          Email
          createdAt
          updatedAt
        }
        nextToken
      }
      Pets {
        items {
          id
          Name
          familiesID
          createdAt
          updatedAt
        }
        nextToken
      }
      Events {
        items {
          id
          Num1
          Num2
          Description
          familiesID
          createdAt
          updatedAt
          eventPetId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFamilies = /* GraphQL */ `
  query ListFamilies(
    $filter: ModelFamiliesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Family_Name
        Users {
          nextToken
        }
        Pets {
          nextToken
        }
        Events {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const petsByFamiliesID = /* GraphQL */ `
  query PetsByFamiliesID(
    $familiesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    petsByFamiliesID(
      familiesID: $familiesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        familiesID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const eventsByFamiliesID = /* GraphQL */ `
  query EventsByFamiliesID(
    $familiesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByFamiliesID(
      familiesID: $familiesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Num1
        Num2
        Description
        Pet {
          id
          Name
          familiesID
          createdAt
          updatedAt
        }
        familiesID
        createdAt
        updatedAt
        eventPetId
      }
      nextToken
    }
  }
`;
export const usersByFamiliesID = /* GraphQL */ `
  query UsersByFamiliesID(
    $familiesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByFamiliesID(
      familiesID: $familiesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        familiesID
        Email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
