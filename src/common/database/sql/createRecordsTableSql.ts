export const createRecordsTableSql = `
    CREATE TABLE records (
        id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
        author varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
        descripton varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        category varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        tags json DEFAULT NULL,
        content json DEFAULT NULL,
        source json DEFAULT NULL,
        relatedLinks json DEFAULT NULL,
        created_at timestamp NULL DEFAULT NULL,
        updated_at timestamp NULL DEFAULT NULL
    );
`