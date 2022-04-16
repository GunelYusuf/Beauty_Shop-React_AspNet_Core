using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace E_Commerce_Beauty_Shop.Persistence.Migrations
{
    public partial class addingPublicIdBlocks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("68445eb6-825a-4b1a-84bf-c2c4a66b42c5"));

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("8c1d35d5-85e1-4692-9170-4a0dff834caa"));

            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "Blocks",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("2d2aec53-1f11-4df8-8873-f552702932b5"), "467856b4-30a6-4da8-94e9-caa35257022b", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("6fbbdfbe-3ab4-4833-99f2-2d572f91601a"), "528fd610-779c-4725-889c-e210ed406dce", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("2d2aec53-1f11-4df8-8873-f552702932b5"));

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: new Guid("6fbbdfbe-3ab4-4833-99f2-2d572f91601a"));

            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "Blocks");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("68445eb6-825a-4b1a-84bf-c2c4a66b42c5"), "ad35da37-fd81-4cff-9ae1-0d47af828ed5", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { new Guid("8c1d35d5-85e1-4692-9170-4a0dff834caa"), "f5fd5d23-166e-4bd5-8c45-eb1b9aa9d085", "Admin", "ADMIN" });
        }
    }
}
