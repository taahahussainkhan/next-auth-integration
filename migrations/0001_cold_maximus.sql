CREATE TABLE `guestbook` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`username` text NOT NULL,
	`body` text NOT NULL,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `guestbook_id` PRIMARY KEY(`id`)
);
