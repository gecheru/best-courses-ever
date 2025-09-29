## Сущности в бд

User

- id (uuid)
- firstName (string)
- lastName (string)
- email (string) (unique)
- password (string)
- role (admin | author | user)

Tag

- id (uuid)
- name (string)

LessonRating

- id (uuid)
- complexity (1-5)
- interestingness (1-5)
- lessonId
- userId

Resourse

- id
- type (video, link, file)
- path

Course

- id (uuid) (unique)
- title (string)
- description (string)
- previewImage (url)
- author (user id)
- tags (tag ids)
- resourses (resourse ids)

Lesson

- id (uuid)
- courseId (uuid)
- title (string)
- description (string)
- resources (resource ids)
- previewImage (string)
- video (string)
- rating

Comment

- id (uuid)
- text (string)
- userId (uuid)
- parentId (uuid) (ex: courseId, lessonId, commentId)

StudentOnCourse

- courseId
- userId
- completedLessons (lesson ids)
