/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet($filter: ModelSubscriptionPetFilterInput) {
    onCreatePet(filter: $filter) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet($filter: ModelSubscriptionPetFilterInput) {
    onUpdatePet(filter: $filter) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet($filter: ModelSubscriptionPetFilterInput) {
    onDeletePet(filter: $filter) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFamilies = /* GraphQL */ `
  subscription OnCreateFamilies($filter: ModelSubscriptionFamiliesFilterInput) {
    onCreateFamilies(filter: $filter) {
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
export const onUpdateFamilies = /* GraphQL */ `
  subscription OnUpdateFamilies($filter: ModelSubscriptionFamiliesFilterInput) {
    onUpdateFamilies(filter: $filter) {
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
export const onDeleteFamilies = /* GraphQL */ `
  subscription OnDeleteFamilies($filter: ModelSubscriptionFamiliesFilterInput) {
    onDeleteFamilies(filter: $filter) {
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
