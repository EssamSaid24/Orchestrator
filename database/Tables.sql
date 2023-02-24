create table rpa.users
(
id int unique not null auto_increment,
user_name_ varchar(20) not null,
user_email varchar(30) not null,
constraint users_pk primary key (id)
);
create table rpa.processes
(
process_name varchar(30),
package_name varchar(30) not null,
package_version varchar(30) not null,
process_priority varchar(10),
id int unique not null,
constraint processes_pk primary key (process_name)
);
create table rpa.machines
(
machine_name varchar(30),
machine_type varchar(20),
constraint machines_pk primary key (machine_name),
user_id int unique,
constraint machine_user_fk foreign key (user_id)
references rpa.users(id)
);
create table rpa.assets
(
asset_name varchar(30) not null,
asset_type varchar(20) not null,
constraint asset_pk primary key (asset_name),
process_id int unique not null,
constraint process_asset_fk foreign key (process_id)
references rpa.processes(id)
);
create table rpa.robots
(
id int not null auto_increment,
robot_name varchar(30) not null,
robot_type varchar(20) not null,
constraint robot_pk primary key (id),
user_id int unique not null,
constraint user_robot_fk foreign key (user_id)
references rpa.users(id)
);

