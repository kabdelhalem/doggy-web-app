/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
      id
      Name
      familiesID
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      Name
      familiesID
      Email
      createdAt
      updatedAt
    }
  }
`;
export const createFamilies = /* GraphQL */ `
  mutation CreateFamilies(
    $input: CreateFamiliesInput!
    $condition: ModelFamiliesConditionInput
  ) {
    createFamilies(input: $input, condition: $condition) {
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
export const updateFamilies = /* GraphQL */ `
  mutation UpdateFamilies(
    $input: UpdateFamiliesInput!
    $condition: ModelFamiliesConditionInput
  ) {
    updateFamilies(input: $input, condition: $condition) {
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
export const deleteFamilies = /* GraphQL */ `
  mutation DeleteFamilies(
    $input: DeleteFamiliesInput!
    $condition: ModelFamiliesConditionInput
  ) {
    deleteFamilies(input: $input, condition: $condition) {
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
