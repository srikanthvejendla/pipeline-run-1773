# Edge Case Testing

## Test Cases

1. **Create Post with Long Title**
   - **Description**: Test the application’s behavior when a blog post title exceeds the maximum length.
   - **Steps**:
     1. Navigate to the create post page.
     2. Enter a long string as the title (e.g., 300 characters).
   - **Expected Result**: The application should handle the input gracefully without crashing.
   - **Actual Result**: [To be filled after testing]

2. **Concurrent Edits**
   - **Description**: Verify how the application handles multiple users editing the same post simultaneously.
   - **Steps**:
     1. User A and User B edit the same post at the same time.
   - **Expected Result**: The application should provide a warning or prevent conflicts.
   - **Actual Result**: [To be filled after testing]

3. **Invalid Image Upload**
   - **Description**: Test the application’s response to an invalid image upload.
   - **Steps**:
     1. Attempt to upload a non-image file in the post creation form.
   - **Expected Result**: An error message should be displayed.
   - **Actual Result**: [To be filled after testing]