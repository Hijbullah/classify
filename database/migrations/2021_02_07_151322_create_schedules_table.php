<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->uuid('class_id')->unique();

            $table->foreignId('batch_id')
                ->constrained()
                ->onDelete('cascade');

            $table->foreignId('subject_id')
                ->constrained()
                ->onDelete('cascade');

            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');


            $table->string('name');
            $table->uuid('meeting_id')->unique()->nullable();
            // $table->string('subject');
            $table->mediumText('topics')->nullable();
            $table->timestamp('class_time')->nullable();

            $table->enum('status', ['pending', 'ongoing', 'ended'])->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
