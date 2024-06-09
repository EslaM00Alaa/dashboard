import sata from "./baseUrl";

const token = JSON.parse(localStorage.getItem('userToken'))?.token;

class Upload {
  constructor(token) {
    this.token = token;
  }

  async upload(endpoint, data) {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const result = await sata.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.token}`
        }
      });

      console.log(`${endpoint} upload result:`, result);
    } catch (error) {
      console.error(`Error uploading to ${endpoint}:`, error);
    }
  }

  uploadBook = (name, author_name, description, category, publishing_year, publisher, edition, ISBN, status, faculty, pages_number, image) => {
    return this.upload('/api/admin/upload_book', {
      name,
      author_name,
      description,
      category,
      publishing_year,
      publisher,
      edition,
      ISBN,
      status,
      faculty,
      pages_number,
      image
    });
  }

  uploadResearch = (name, researcher_name, description, researcher_email, status, faculty, the_supervisory_authority) => {
    return this.upload('/api/admin/upload_research', {
      name,
      researcher_name,
      description,
      researcher_email,
      status,
      faculty,
      the_supervisory_authority
    });
  }

  uploadExam = (subject_name, description, type, grade, image) => {
    return this.upload('/api/admin/upload_exam', {
      subject_name,
      description,
      type,
      grade,
      image
    });
  }

  uploadProject = (name, output, field, description, student_id, technologies) => {
    return this.upload('/api/admin/upload_project', {
      name,
      output,
      field,
      description,
      student_id,
      technologies
    });
  }
}

const uploadInstance = new Upload(token);
export default uploadInstance;
