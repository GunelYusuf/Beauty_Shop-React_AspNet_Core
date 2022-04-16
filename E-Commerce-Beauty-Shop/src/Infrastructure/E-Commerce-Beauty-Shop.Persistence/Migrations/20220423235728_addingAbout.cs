using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace E_Commerce_Beauty_Shop.Persistence.Migrations
{
    public partial class addingAbout : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("6c07cb45-aece-4cc2-8acb-9c57dcd95cd4"));

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8acca6a5-ffa0-4c46-858a-be89c05315ec"));

            migrationBuilder.CreateTable(
                name: "Abouts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Subtitle = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    VideoUrl = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Abouts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Blocks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Step = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    IconUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blocks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AboutBlocks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AboutId = table.Column<Guid>(nullable: false),
                    BlocksId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AboutBlocks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AboutBlocks_Abouts_AboutId",
                        column: x => x.AboutId,
                        principalTable: "Abouts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AboutBlocks_Blocks_BlocksId",
                        column: x => x.BlocksId,
                        principalTable: "Blocks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("68445eb6-825a-4b1a-84bf-c2c4a66b42c5"), "ad35da37-fd81-4cff-9ae1-0d47af828ed5", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("8c1d35d5-85e1-4692-9170-4a0dff834caa"), "f5fd5d23-166e-4bd5-8c45-eb1b9aa9d085", "Admin", "ADMIN" });

            migrationBuilder.CreateIndex(
                name: "IX_AboutBlocks_AboutId",
                table: "AboutBlocks",
                column: "AboutId");

            migrationBuilder.CreateIndex(
                name: "IX_AboutBlocks_BlocksId",
                table: "AboutBlocks",
                column: "BlocksId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AboutBlocks");

            migrationBuilder.DropTable(
                name: "Abouts");

            migrationBuilder.DropTable(
                name: "Blocks");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("68445eb6-825a-4b1a-84bf-c2c4a66b42c5"));

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8c1d35d5-85e1-4692-9170-4a0dff834caa"));

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("6c07cb45-aece-4cc2-8acb-9c57dcd95cd4"), "1ab6f5c8-ccdb-4df7-9f63-18b7aa8ef97a", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("8acca6a5-ffa0-4c46-858a-be89c05315ec"), "4f77547e-ff12-464f-911b-f4644d8a98cd", "Admin", "ADMIN" });
        }
    }
}
