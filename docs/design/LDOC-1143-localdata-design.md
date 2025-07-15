# Design Document: LDOC-1143 - hsSendLocalData Function and OnReceiveLocalData Callback

## Overview
This document outlines the design for implementing the `hsSendLocalData` function and `OnReceiveLocalData` callback in the VketCloudSDK HeliScript documentation.

## Requirements
Based on Jira task LDOC-1143, we need to create documentation for:
1. `hsSendLocalData` function - sends local data to the user
2. `OnReceiveLocalData` callback - receives local data in components

## Architecture Design

### 1. Documentation Structure
- **Location**: `docs/hs/hs_system_function_localdata.ja.md` and `docs/hs/hs_system_function_localdata.en.md`
- **Pattern**: Follow bilingual documentation pattern (.ja.md for Japanese, .en.md for English)
- **Content**: Based on the reference content provided in the Jira task

### 2. Function Specifications

#### hsSendLocalData
```heliScript
void hsSendLocalData(string type, string data)
```
- **Purpose**: Send arbitrary data to the user's own client only
- **Parameters**:
  - `type`: String identifier for the data type
  - `data`: String data to send
- **Behavior**: Unlike Net-based functions, this only notifies the executing user

#### OnReceiveLocalData
```heliScript
component LocalDataReceiver
{
    public void OnReceiveLocalData(string type, string data)
    {
        // Handle received data
    }
}
```
- **Purpose**: Callback method to receive local data in components
- **Parameters**:
  - `type`: String identifier matching the sent data type
  - `data`: String data received

### 3. Content Structure
1. **Title**: Built-in Functions - Local Data
2. **Introduction**: Explanation of local data vs network data
3. **Function Documentation**: 
   - `hsSendLocalData` function specification
4. **Callback Documentation**:
   - `OnReceiveLocalData` callback specification
   - Usage example with component

### 4. Implementation Strategy (TDD)
1. **Test Cases**: Create validation tests for:
   - Document structure validation
   - Content completeness
   - Code example syntax
   - Bilingual consistency
2. **Minimum Implementation**: Create basic documentation files
3. **Refactoring**: Enhance with examples and better formatting

## Files to Create
1. `docs/hs/hs_system_function_localdata.ja.md` - Japanese documentation
2. `docs/hs/hs_system_function_localdata.en.md` - English documentation
3. `tests/test_localdata_docs.py` - Test file for TDD validation
4. `docs/design/code-review-LDOC-1143.md` - Code review documentation

## Success Criteria
- [ ] Documentation files created with proper structure
- [ ] Both Japanese and English versions complete
- [ ] Code examples syntactically correct
- [ ] Tests pass for all validation criteria
- [ ] Navigation updated in mkdocs.yml if needed
- [ ] Documentation builds without errors

## Dependencies
- Existing HeliScript documentation pattern
- MkDocs configuration
- Bilingual documentation standards

## Risk Assessment
- **Low Risk**: Following established documentation patterns
- **Medium Risk**: Ensuring accuracy of technical specifications
- **Mitigation**: Follow existing HeliScript function documentation structure

## Timeline
1. **Phase 1**: Test cases creation (TDD setup)
2. **Phase 2**: Minimum viable documentation
3. **Phase 3**: Refactoring and enhancement
4. **Phase 4**: Code review and GitHub issue update