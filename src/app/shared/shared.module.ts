import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorValidationMessageComponent } from './components/error-validation-message/error-validation-message.component';
import { PostBoardComponent } from './components/post-board/post-board.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [SkillsComponent, ProjectsComponent, ErrorValidationMessageComponent, PostBoardComponent],
  exports: [SkillsComponent, ProjectsComponent, ErrorValidationMessageComponent, PostBoardComponent],
  bootstrap: [],
})
export class SharedModule {}
